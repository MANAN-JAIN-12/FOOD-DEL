import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
const Home = () => {
  const[category,setCategory] = React.useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
