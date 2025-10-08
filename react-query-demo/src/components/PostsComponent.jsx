import { useQuery } from '@tanstack/react-query';

function PostsComponent() {
  // Fetch posts from JSONPlaceholder
  const { isPending, isLoading, isError, error, data, refetch, isFetching, isRefetching } = useQuery({
    queryKey: ['fetchPosts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json(),
      ),
    staleTime: 60000, // 1 minute for demo
    cacheTime: 300000, // 5 minutes cache
    refetchOnWindowFocus: true, // refetch when window regains focus
    keepPreviousData: true, // keep previous data while fetching new
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <p1> { isLoading || !isError ? 'Loading...' : 'Posts Loaded' }</p1>
      <button onClick={() => refetch()} disabled={isFetching || isRefetching}>
        {isFetching || isRefetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>
      <p style={{ color: 'gray', fontSize: '0.9em' }}>
        (Try navigating away and back to see cache in action)
      </p>
      <ul>
        {data && data.map(post => (
          <li key={post.id} style={{ marginBottom: '1em' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;