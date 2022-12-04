import React from 'react';
import { Link } from 'react-router-dom';
import './VocHeader.css';

const VocHeader = props => {
  const { headersName, children } = props;

  return (
    <div className="voc-header">
        <Link to='/voc/question'>
            <button align="right" className="voc-view-go-list-btn" >
            게시글 작성
            </button>
        </Link>
        <Link to='/bus/sheet'>
            <button align="right" className="voc-view-go-list-btn" >
            셔틀버스 시간표 보기
            </button>
        </Link>
    </div>
  )
}

export default VocHeader;