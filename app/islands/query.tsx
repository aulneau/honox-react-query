import {useQuery} from "@tanstack/react-query";

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Query() {
    const query = useQuery({
        queryKey: ['todos', {id: 1}] as const,
        queryFn: async ({queryKey}) => {
            const [_, {id}] = queryKey
            await sleep(2000)
            return {id, text: 'Do the laundry'}
        }
    });
    if (!query.data) {
        return <div>loading...</div>
    }
    return <div>{query.data.text}</div>
}