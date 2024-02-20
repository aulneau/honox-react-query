import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import Query from "../islands/query";

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <Counter />
      <Query />
    </div>,
    { title: name }
  )
})
