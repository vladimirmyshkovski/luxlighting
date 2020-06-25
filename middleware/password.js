export default function({ store, redirect }) {
  if (store.state.password === 'strongpassword') {
    return
  }
  return redirect('/password')
}
