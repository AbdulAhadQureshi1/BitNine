const Dashboard = ({username}) => {
  return (
    <div className="w-full h-screen dark:bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="dark:text-white text-3xl ">Welcome to the dashboard!</h1>
      <p className="dark:text-white text-2xl">{"{ "}{username}{" }"}</p>
    </div>
  )
}

export default Dashboard
