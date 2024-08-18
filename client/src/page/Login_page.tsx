
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  
import { Button } from '../components/ui/button'
import { Key } from "react"

const getUsers= async()=>
{
    const result= await fetch('http://localhost:4000/users')
    
    return result.json();
}

export default  function Login_page() {
  
   
    const users= getUsers();

  return (
   <>
   <h1 className="text-2xl">Trackrrss User Info</h1>
   <div className="grid grid-cols-3 gap-8">
    {users.map(user_data=>{
        <Card key={user_data.id}>
            <CardHeader>{user_data.name}</CardHeader>
            <CardContent>Age: {user_data.age}</CardContent>
            <CardContent>Address:{user_data.address}</CardContent>
        </Card>
    })
    }

   </div>
   
   </>
  )
}

