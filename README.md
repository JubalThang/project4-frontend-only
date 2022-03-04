# Tinyblog React App
This is a small blog app that everyone can read all the posts without having an account. Each post has like counts and name of the owner and delete button. But, you must login to give like and also only the creator of the post is allowed to delete the post. 

## Dependencies
- [Material UI Icons ](https://mui.com/components/icons/#main-content)
- [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app)
- [React Hook Form](https://react-hook-form.com/)
- [React Router v6](https://reactrouter.com/) 

## Ruby Backend Repo link
[Githup](https://github.com/JubalThang/phase4-project-backend-only)


## Navbar
I used *NavLink* rather than regular *Link* from 'react-router-dom'. **NavLink** has isActive hook to determind if the link is rather Active or not. 
```
 <NavLink to='/' className={({ isActive }) => isActive ? 'bg-red-500 rounded-md py-2' : ''}> <Button text='HOME' /> </NavLink>
```
If the page is 'Active' rounded red background will apply. 
I also creted custom Button Component with text and func props. 'text' is for button value and func is onClick function.
```
 const Button = ({ text, func }) => {

    if (func) {
      return <button onClick={func} className=' font-black text-xl text-white px-2 hover:text-red-300'>{text}</button>
    } else {
      return (
        <button className=' font-black text-xl text-white px-2 hover:text-red-300'>{text}</button>
      )
    }
  }
```
If **func** is not applied the Button component will return a button without onClikc function.


## Read posts
When the app load, it will fetch all the posts from backend and display them on the **homePage**. 

## Create/Like/Delete post
Click **Write** on the menubar. If you are not logged in, backend will not allowe to give like throw error on console. Same to 'delete' backend will only allowed to the owner of the post to deleted.
