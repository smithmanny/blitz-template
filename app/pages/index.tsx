import { BlitzPage } from "blitz"

import Container from "app/core/components/shared/Container"
import Grid from "app/core/components/shared/Grid"
import Layout from "app/core/layouts/Layout"
import Typography from "app/core/components/shared/Typography"
import Form, { TextField } from "app/core/components/form"

const Home: BlitzPage = (props) => {
  return (
    <Container maxWidth="md">
      <Form submitText="Login" onSubmit={() => {}}>
        <TextField name="email" label="Email" placeholder="Email" />
        <TextField name="password" label="Password" placeholder="Password" type="password" />
      </Form>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
