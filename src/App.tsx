import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import CharactersPage from "./pages/CharactersPage/CharactersPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    children: [
      {
        path: "",
        element: (
          <CharactersPage />
        )
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
