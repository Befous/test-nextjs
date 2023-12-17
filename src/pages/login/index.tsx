import FormLogin from "@/components/formlogin"

export default function Page() {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);
  return (
    <>
      <h1>Test Login</h1>
      <FormLogin />
    </>
  )
}