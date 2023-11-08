import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmarks}) => {
    
    const {title,cover, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-20'>

            <img className='w-full mb-8 mt-3' src={cover} alt= {`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex '>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-8'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className=' flex items-center'>
                    <span>{reading_time} min red</span>
                    <button onClick={handleAddToBookmarks} className='ml-2 text-red-600 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl my-5'>{title}</h2>

            <p>
                {
                    hashtags.map(hash => <span><a href=""> #{hash}</a></span> )
                }
            </p>

        </div>
    );
};

Blog.prototype ={
    blog:PropTypes.object.isRequired
    
}

export default Blog;