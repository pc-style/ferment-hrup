import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PackagesPage from './pages/PackagesPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'o-nas', element: <AboutPage /> },
      { path: 'uslugi', element: <ServicesPage /> },
      { path: 'pakiety', element: <PackagesPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'kontakt', element: <ContactPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
