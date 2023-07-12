import { Route } from "@/app/models"
import Link from "next/link"
import "./Navigator.scss"

interface Props {
  pathNames: Route[]
}

function Navigator({pathNames}: Props) {
  return (
    <nav className="Navigator">
      {pathNames.map(pathName => (
        <Link key={pathName.path} href={pathName.path}>{pathName.name}</Link>)
      )}
    </nav>
  )
}

export default Navigator