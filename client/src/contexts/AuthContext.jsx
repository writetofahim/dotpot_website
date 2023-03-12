import { createContext } from "react"
export const AuthContext = createContext()
import axios from "axios"

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const currentUser = localStorage.getItem("user")
    setUser(JSON.parse(currentUser))
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      const { data } = await axios.post("/api/auth/login", { email, password })
      setUser(user)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }


  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}