import FormLogin from "@/components/formlogin"

export default function Page() {
  console.log(process.env.DB_HOST)
  var test = String(process.env.DB_HOST);
  return (
    <>
      <h1>{test}</h1>
      <FormLogin />
    </>
  )
}