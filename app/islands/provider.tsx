import * as React from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
export default function Provider(props: {children: React.ReactNode}) {
    const [queryClient] = React.useState(() => {
        return new QueryClient()
    })
    return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}