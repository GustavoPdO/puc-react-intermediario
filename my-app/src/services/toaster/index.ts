import { toast } from "react-toastify"

function notify(type: "success" | "error", message: string): void {
  toast[type](message)
}

export default notify