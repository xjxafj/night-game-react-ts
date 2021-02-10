import React, { FC } from 'react'
import {useState} from 'react'
import './NightGame.css'
interface INightGameCellProps{
    content: string
    click: ()=>void
}
const NightGameCell:FC<INightGameCellProps>=(props)=>{
   
    
    return (
        <>
            <button className="square" onClick={props.click}>{props.content}</button>
        </>
    );
}
const NightGame:FC=()=>{
    const [data,setData]=useState({
        index:0,
        history:[{squares: Array(9).fill("")}],
        xIsNext: true,
        winContent: ""
    });

    function handleChangeContent(i: number){
        const history = data.history;
        const current = history[data.index];
        const squares = current.squares.slice();
        //已经赢了就结束游戏
        if (data.winContent!='') {
            return
        }
        //已经有数据就不填写
        if (squares[i]!="") {
            return
        }
        data.index+=1;
        squares[i]=data.xIsNext?"X":"O";

        history.push({squares})
        //判断是否赢了，如果赢就给出赢家
        let dd=calculateWinner(squares)
        if (dd!=null) {
            data.winContent=dd;
        }

        console.log(data.history.length)
        //alert( data.squares[i])
        setData({
           index:data.index,
           history: history,
           xIsNext: !data.xIsNext,
           winContent: data.winContent
       })
       console.log(data.history)
    }


    function gotoHiorty(index:number) {
        setData({
            index:index,
            history: data.history,
            xIsNext: data.xIsNext,
            winContent: data.winContent
        })
    }

    function reStartGame(){
        //alert( data.squares[i])
        setData({
            index:0,
            history:[{squares: Array(9).fill("")}],
            xIsNext: true,
            winContent: ""
       })
    }

    function GetNightGameCell(i: number){
        return  <NightGameCell content={data.history[data.index].squares[i]} click={()=>handleChangeContent(i)}/>
    }

    function  test() {
        setData({
            index:3,
            history: data.history,
            xIsNext: data.xIsNext,
            winContent: data.winContent
        })
    }

    function calculateWinner(squares: Array<string>) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const status =  `winner: ${data.winContent}`;
        const content=data.xIsNext?"X":"O"
        const nextContent =  `Next player: ${content}`;

        const moves = data.history.map((step, move) => {
            console.log(move)
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li>
                <button onClick={() => gotoHiorty(move)}>{desc}</button>
              </li>
            );
          });


        return (
          <div>
              {console.log("渲染界面")}
                {data.winContent!==''?<div className="status">{status}</div>:<></>}
                <div onClick={reStartGame}>重新开始游戏</div>
                <ol>{moves}</ol>
                <button onClick={()=>test()}>测试</button>
                <div className="status">{nextContent}</div>
                <div className="board-row">
                    {GetNightGameCell(0)}
                    {GetNightGameCell(1)}
                    {GetNightGameCell(2)}
                </div>
                <div className="board-row">
                    {GetNightGameCell(3)}
                    {GetNightGameCell(4)}
                    {GetNightGameCell(5)}
                </div>
                <div className="board-row">
                    {GetNightGameCell(6)}
                    {GetNightGameCell(7)}
                    {GetNightGameCell(8)}
                </div>
          </div>
        );  
}
export default NightGame;