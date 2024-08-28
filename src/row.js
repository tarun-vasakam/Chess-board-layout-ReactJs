import React from 'react';
import Box from './box';
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

function Chess(){
    return(
        <div className='container'>
            <div className='row-container'>
                <Box name={true} value={<FaChessRook size="50"/>}/>
                <Box name={false} value={<FaChessKnight size="50"/>}/>
                <Box name={true} value={<FaChessBishop size="50"/>}/>
                <Box name={false} value={<FaChessQueen size="50"/>}/>
                <Box name={true} value={<FaChessKing size="50"/>}/>
                <Box name={false} value={<FaChessBishop size="50"/>}/>
                <Box name={true} value={<FaChessKnight size="50"/>}/>
                <Box name={false} value={<FaChessRook size="50"/>}/>
            </div>
            <div className='row-container'>
                <Box name={false} value={<FaChessPawn size="50"/>}/>
                <Box name={true} value={<FaChessPawn size="50"/>}/>
                <Box name={false} value={<FaChessPawn size="50"/>}/>
                <Box name={true} value={<FaChessPawn size="50"/>}/>
                <Box name={false} value={<FaChessPawn size="50"/>}/>
                <Box name={true} value={<FaChessPawn size="50"/>}/>
                <Box name={false} value={<FaChessPawn size="50"/>}/>
                <Box name={true} value={<FaChessPawn size="50"/>}/>
            </div>
            <div className='row-container'>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
            </div>
            <div className='row-container'>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
            </div>
            <div className='row-container'>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
            </div>
            <div className='row-container'>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
                <Box name={false}/>
                <Box name={true}/>
            </div>
            <div className='row-container'>
                <Box name={true} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={false} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={true} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={false} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={true} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={false} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={true} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
                <Box name={false} value={<FaChessPawn size="50" style={{color: "white"}}/>}/>
            </div>
            <div className='row-container'>
                <Box name={true} value={<FaChessRook size="50" style={{color:"white"}}/>}/>
                <Box name={false} value={<FaChessKnight size="50" style={{color:"white"}}/>}/>
                <Box name={true} value={<FaChessBishop size="50" style={{color:"white"}}/>}/>
                <Box name={false} value={<FaChessQueen size="50" style={{color:"white"}}/>}/>
                <Box name={true} value={<FaChessKing size="50" style={{color:"white"}}/>}/>
                <Box name={false} value={<FaChessBishop size="50" style={{color:"white"}}/>}/>
                <Box name={true} value={<FaChessKnight size="50" style={{color:"white"}}/>}/>
                <Box name={false} value={<FaChessRook size="50" style={{color:"white"}}/>}/>
            </div>
        </div>
    );
}
// import React from 'react';
// import Box from './box';
// import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

// function Chess() {
//     return (
//         <div className='container'>
//             <div className='row-container'>
//                 <Box name={false} value={<FaChessRook size="40" />} />
//                 <Box name={false} value={<FaChessKnight size="40" />} />
//                 <Box name={false} value={<FaChessBishop size="40" />} />
//                 <Box name={false} value={<FaChessQueen size="40" />} />
//                 <Box name={false} value={<FaChessKing size="40" />} />
//                 <Box name={false} value={<FaChessBishop size="40" />} />
//                 <Box name={false} value={<FaChessKnight size="40" />} />
//                 <Box name={false} value={<FaChessRook size="40" />} />
//             </div>
//             <div className='row-container'>
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//             </div>
//             <div className='row-container'>
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//             </div>
//             <div className='row-container'>
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//             </div>
//             <div className='row-container'>
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//             </div>
//             <div className='row-container'>
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//             </div>
//             <div className='row-container'>
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//                 <Box name={true} />
//                 <Box name={false} />
//             </div>
//             <div className='row-container'>
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//                 <Box name={false} value={<FaChessPawn size="40" />} />
//             </div>
//             <div className='row-container'>
//                 <Box name={false} value={<FaChessRook size="40" />} />
//                 <Box name={false} value={<FaChessKnight size="40" />} />
//                 <Box name={false} value={<FaChessBishop size="40" />} />
//                 <Box name={false} value={<FaChessQueen size="40" />} />
//                 <Box name={false} value={<FaChessKing size="40" />} />
//                 <Box name={false} value={<FaChessBishop size="40" />} />
//                 <Box name={false} value={<FaChessKnight size="40" />} />
//                 <Box name={false} value={<FaChessRook size="40" />} />
//             </div>
//         </div>
//     );
// }

export default Chess;
