/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const Todo2 = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    }, []);

    const todocontent = {
        content: 0,
        date: '',
        time: '',
        modifyFlag: false
    }

    const contentIndex = useRef(1);
    const [contentList, setContentList] = useState([]);
    const [inputs, setInputs] = useState(todocontent);
    const inputRefs = [useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'content': index = 1; break;
                case 'date': index = 2; break;
                default: addButtonRef.current.click();
            }
            if(index !== 0){
                inputRefs[index].current.focus();
            }
        }
    }




    const addHandler = () => {
        const todocontent = {
            ...inputs
        };

        todocontent.id = contentIndex.current++;

        setContentList([...contentList, todocontent]);
    }

    const onModify = (index) => {
        setContentList(contentList.map(todocontent => {
            if(todocontent.id === index) {
                setInputs({...todocontent});
                todocontent.modifyFlag = true;
            }else {
                todocontent.modifyFlag = false;
            }
            return todocontent;
        }));
    }

    const onSave = (index) => {
        setContentList(contentList.map(todocontent => {
            if(todocontent.id === index) {
                return {
                    ...inputs
                };
            }
            return todocontent;
        }));
    }

    const onRemove = (index) => {
        setContentList(contentList.filter(todocontent => todocontent.id !== index));
    }

    return (
        <div css={S.Container}>
            <div css={S.ToDoTitle}>
                <input css={S.ToDoInputbody} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='할 일을 입력하세요' name='content'  ref={inputRefs[0]}/>
                <input css={S.ToDoInput} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='날짜를 입력하세요' name='date' ref={inputRefs[1]}/>
                <input css={S.ToDoInput} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='시간을 입력하세요' name='time' ref={inputRefs[2]}/>
                <button css={S.AddButton} type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <div css={S.ToDoContentmain}>
                {contentList.map(todocontent => {
                    return (
                        <div css={S.TodoContentList} key={todocontent.id}>
                            <div css={S.TodoContent}>{todocontent.id}</div>
                            <div css={S.TodoContentbody}>{todocontent.modifyFlag ? (<input css={S.ToDoInputbody} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='할 일을 입력하세요' name='content' defaultValue={todocontent.content}/>) : todocontent.content}</div>
                            <div css={S.TodoContent}>{todocontent.modifyFlag ? (<input css={S.ToDoInput} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='수정 날짜' name='date' defaultValue={todocontent.date}/>) : todocontent.date}</div>
                            <div css={S.TodoContent}>{todocontent.modifyFlag ? (<input css={S.ToDoInput} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='수정 시간' name='time' defaultValue={todocontent.time}/>) : todocontent.time}</div>
                            <div css={S.ContentButton}>
                                {todocontent.modifyFlag 
                                    ? (<button onClick={() => onSave(todocontent.id)}>확인</button>)
                                    : (<button onClick={() => onModify(todocontent.id)}>수정</button>) 
                                }
                            </div>
                            <div css={S.ContentButton}>
                                <button onClick={() => onRemove(todocontent.id)}>삭제</button>    
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Todo2;