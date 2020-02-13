import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
        ${reset};
        a{
            text-decoration:none;
            color:inherit;
        }
        *{
            box-sizing:border-box;
        }
        body{
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Canta
            font-size:12px;
            background-color:rgba(20, 20, 20, 1);
            color: white;
            padding-top:60px;
        }
        
        .tabs{
            font-family:arial;
            margin:20px;
            width:70%;
          }
          
          img{
            width:300px;
          }
          
          .tab-buttons{
            margin-bottom:50px;
          }
          
          button{
            margin-right:15px;
            font-size:20px;
            background:transparent;
            border:none;
            outline:none;
            padding:10px 20px ;
            cursor:pointer;
            color:rgba(159, 159, 173); 
            transition:all ease-in-out .2s;
            border-bottom:2px solid transparent;
            
          }
          .active{
            border-bottom:2px solid #42b3f4;
            color: white;
          }

`;

export default globalStyles;
