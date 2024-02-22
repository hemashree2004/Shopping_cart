import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Simple Pendent with diamond', 
          price: 235432, 
          image: 
'https://i.pinimg.com/originals/41/e1/d9/41e1d924be8fff65097d28d2922ab210.jpg'
        },
        { id: 2, 
          name: 'A Ring with a diamond', 
          price: 153280, 
          image: 
'https://i.pinimg.com/originals/01/7b/90/017b902921d297ac35a4485adf643768.jpg'
        },
        { id: 3, 
          name: 'A necklace', 
          price: 199999, 
          image: 
'https://i.pinimg.com/originals/c3/a1/e6/c3a1e6248c8219f7d8ba031a80d84f76.jpg'
        },
        { id: 4,
          name: 'Anklet',
          price: 56144,
          image:
'https://images-static.nykaa.com/media/catalog/product/7/b/7b625bbabj1_1.jpg'
        },
    ]);
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const addCourseToCartFunction = (MANya) => {
        const alreadyCourses = cartCourses
            .find(item => item.product.id === MANya.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === MANya.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: MANya, quantity: 1}]);
        }
    };
    const deleteCourseFromCartFunction = (MANya) => {
        const updatedCart = cartCourses
            .filter(item => item.product.id !== MANya.id);
        setCartCourses(updatedCart);
    };
    const totalAmountCalculationFunction = () => {
        return cartCourses
            .reduce((total, item) => 
                total + item.product.price * item.quantity, 0);
    };
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                 courseSearchUserFunction=
                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
export default App;