import FormLogin from "@/components/formlogin"

export default function Page() {
  console.log(process.env.DB_HOST);
  console.log(process.env.NEXT_PUBLIC_DB_USER);
  console.log(process.env.DB_PASS);
  var testpublic = (process.env.NEXT_PUBLIC_DB_USER);
  return (
    <>
      <h1>Test Login</h1>
      <h1>{testpublic}</h1>
      <FormLogin />
    </>
  )
}