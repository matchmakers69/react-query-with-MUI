# Building the real app with React Query

An example of building the app using React Query.

**Demo:** https://react-query-tutorial.herokuapp.com/

**Article:** https://www.smashingmagazine.com/2022/01/building-real-app-react-query/

## useQuery properties

- isLoading
- isFetching
- isError
- staleTime
- cacheTime

### isError

- returns boolen

### isFetching

- the async query function has not been resolved yet - promise based library for example - Promise is not resolved yet

### isLoading

- we have no cached data yey, plus isFetching - we have no cached data to display, prevents having undefined

### cacheTime

- cache is for data might be used later
- query goeas into "cold storage" if there's no active useQuery
- cache data expires after **cacheTime** (default: 5minutes)

### staleTime - really depends on type of the data for example data which does not require to be refetched all the time can be staled for a bit longer

- staleTime is for refetching
- data refetch only triggers for stale data for example component remount, window refocus
- by default it is 0 miliseconds - we always assume data is out of date and it needs to be refetch from the server (just to avoid having outdated data on the client)
- staleTime translates to "max age" we allow data to be
- how long we tolerate data potentially being out of date
