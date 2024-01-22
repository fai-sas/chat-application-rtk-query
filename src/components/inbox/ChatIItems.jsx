/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import { useGetConversationsQuery } from '../../features/conversations/conversationsAPI'
import ChatItem from './ChatItem'
import Error from '../ui/Error'
import moment from 'moment'
import getPartnerInfo from '../../utils/getPartnerInfo'
import gravatarUrl from 'gravatar-url'
import { Link } from 'react-router-dom'

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth) || {}
  const { email } = user || {}

  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email)

  let content = null

  if (isLoading) {
    content = <li className='m-2'>Loading...</li>
  } else if (!isLoading && isError) {
    content = (
      <li className='m-2'>
        <Error message={error.data} />
      </li>
    )
  } else if (!isLoading && !isError && conversations?.length === 0) {
    content = (
      <li className='m-2'>
        <p>No conversations found</p>
      </li>
    )
  } else if (!isLoading && !isError && conversations?.length > 0) {
    content = conversations.map((conversation) => {
      const { id, message, timestamp } = conversation
      const { name, email: partnerEmail } = getPartnerInfo(
        conversation.user,
        email
      )

      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
            <ChatItem
              avatar={gravatarUrl(partnerEmail, {
                size: 80,
              })}
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow}
            />
          </Link>
        </li>
      )
    })
  }

  return <ul>{content}</ul>
}
