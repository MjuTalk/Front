import {
    Main,
    MediaDiv,
} from '../Voc/styledComponent';

import ShowPostList from '../Voc/ShowPostList';


import { darkTheme, GlobalStyles, lightTheme } from '../Voc/styles';
import { useState } from 'react'; import Voc from './Voc';
;

function List() {
    const initialPostList = [
        { id: 1, title: '리액트 공부는 재미있어.', replCount: 1 },
        { id: 2, title: '프론트 공부 열심히 해.', replCount: 43 },
        { id: 3, title: '파이팅^^.', replCount: 1 },
    ];
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false)
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        setPostList((postList) => [
            ...postList, { id: 4, title: '공부는 열심히 하면 좋아.', replCount: 21 },
        ]);
    };

    return (
        <>
            
                <ShowPostList loading={loading} isPost={isPost} postList={postList} addPost={addPost} />




        </>
    )
}

export default List;