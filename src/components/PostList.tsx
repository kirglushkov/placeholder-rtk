import { Link } from 'react-router-dom'
import { useGetPostsQuery } from '../api'
import { FixedSizeList as List } from 'react-window'
import styled from '@emotion/styled'
import { useState } from 'react'
import { truncateString } from '../utils/truncateStr'
import InfiniteLoader from 'react-window-infinite-loader'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > button {
    width: min-content;
  }
`

const StyledLink = styled(Link)`
  max-width: 1000px;

  > h2 {
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
const Content = styled.div<{ expanded: boolean }>`
  display: flex;
  align-self: center;
  font-size: 0.9rem;
`

const ContentWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.expanded ? 'column' : 'row')};
  gap: ${(props) => (props.expanded ? '5px' : '10px')};
  padding: 0px 10px;
`

function PostList() {
  const { data, error, isLoading } = useGetPostsQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>
    } else {
      return <div>Error occurred</div>
    }
  }

  if (!data) {
    return null
  }

  const Row = ({
    index,
    style,
  }: {
    index: number
    style: NonNullable<unknown>
  }) => {
    const post = data[index]
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
      setExpanded(!expanded)
    }

    return (
      <div style={style}>
        <Item>
          <StyledLink to={`/placeholder-rtk/posts/${post.id}`}>
            <h2>
              {post.id}. {post.title}
            </h2>
          </StyledLink>
          <ContentWrapper expanded={expanded}>
            <Content expanded={expanded}>
              <span> {expanded ? post.body : truncateString(post.body)}</span>
            </Content>
            <button onClick={toggleExpand}>
              {expanded ? 'Скрыть' : 'Просмотр'}
            </button>
          </ContentWrapper>
        </Item>
      </div>
    )
  }

  const isItemLoaded = (index: number) => {
    return index < data.length
  }

  const loadMoreItems = () => {
    // Implement the logic to load more items
    // You can fetch more data using the `useGetPostsQuery` hook or any other method you prefer
  }

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={data.length + 1}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered = () => {}, ref }) => (
        <List
          height={window.innerHeight}
          itemCount={100}
          itemSize={170}
          width="100dvw"
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default PostList
