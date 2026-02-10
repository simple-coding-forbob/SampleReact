import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/chap02/ex01/Home";
import Variable from "../pages/chap02/ex03/Variable";
import VariableQuiz from "../pages/chap02/ex03/VariableQuiz";
import Function from "../pages/chap02/ex04/Function";
import FunctionQuiz from "../pages/chap02/ex04/FunctionQuiz";
import State from "../pages/chap02/ex05/State";
import StateQuiz from "../pages/chap02/ex05/StateQuiz";
import StateArray from "../pages/chap02/ex06/StateArray";
import StateArrayQuiz from "../pages/chap02/ex06/StateArrayQuiz";
import StateObject from "../pages/chap02/ex07/StateObject";
import StateObjectQuiz from "../pages/chap02/ex07/StateObjectQuiz";
import Css from "../pages/chap02/ex08/Css";
import Lifecyle from "../pages/chap03/ex01/Lifecyle";
import LifecyleQuiz from "../pages/chap03/ex01/LifecyleQuiz";
import Image from "../pages/chap03/ex02/Image";
import ImageQuiz from "../pages/chap03/ex02/ImageQuiz";
import Father from "../pages/chap03/ex03/Father";
import FatherQuiz from "../pages/chap03/ex03/FatherQuiz";
import Condition from "../pages/chap03/ex04/Condition";
import ConditionQuiz from "../pages/chap03/ex04/ConditionQuiz";
import Map from "../pages/chap03/ex05/Map";
import MapQuiz from "../pages/chap03/ex05/MapQuiz";
import Map2 from "../pages/chap03/ex06/Map2";
import Map2Quiz from "../pages/chap03/ex06/Map2Quiz";
import Mypage from "../pages/chap03/ex07/Mypage";
import MypageQuiz from "../pages/chap03/ex07/MypageQuiz";
import FormInput from "../pages/chap04/ex01/FormInput";
import FormInputQuiz from "../pages/chap04/ex01/FormInputQuiz";
import FormInput2 from "../pages/chap04/ex02/FormInput2";
import FormInput2Quiz from "../pages/chap04/ex02/FormInput2Quiz";
import FormInput3 from "../pages/chap04/ex03/FormInput3";
import FormInput3Quiz from "../pages/chap04/ex03/FormInput3Quiz";
import AlbumQuiz from "../pages/chap05/ex01/AlbumQuiz";
import Post from "../pages/chap05/ex01/Post";
import AlbumListQuiz from "../pages/chap05/ex02/AlbumListQuiz";
import PostList from "../pages/chap05/ex02/PostList";
import AddAlbumQuiz from "../pages/chap05/ex03/AddAlbumQuiz";
import AddPostList from "../pages/chap05/ex03/AddPostList";
import AlbumDetailQuiz from "../pages/chap05/ex04/AlbumDetailQuiz";
import PostDetail from "../pages/chap05/ex04/PostDetail";
import LoginView from "../pages/chap05/ex05/LoginView";
import SignViewQuiz from "../pages/chap05/ex05/SignViewQuiz";

// 제공하고 설명
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/variable", element: <Variable /> },
      { path: "/variable-quiz", element: <VariableQuiz /> },
      { path: "/function", element: <Function /> },
      { path: "/function-quiz", element: <FunctionQuiz /> },
      { path: "/state", element: <State /> },
      { path: "/state-quiz", element: <StateQuiz /> },
      { path: "/state-array", element: <StateArray /> },
      { path: "/state-array-quiz", element: <StateArrayQuiz /> },
      { path: "/state-object", element: <StateObject /> },
      { path: "/state-object-quiz", element: <StateObjectQuiz /> },
      { path: "/bg-color", element: <Css /> },
      //   chap03
      { path: "/lifecycle", element: <Lifecyle /> },
      { path: "/lifecycle-quiz", element: <LifecyleQuiz /> },
      { path: "/image", element: <Image /> },
      { path: "/image-quiz", element: <ImageQuiz /> },
      { path: "/props", element: <Father /> },
      { path: "/props-quiz", element: <FatherQuiz /> },
      { path: "/condition", element: <Condition /> },
      { path: "/condition-quiz", element: <ConditionQuiz /> },
      { path: "/map", element: <Map /> },
      { path: "/map-quiz", element: <MapQuiz /> },
      { path: "/map2", element: <Map2 /> },
      { path: "/map2-quiz", element: <Map2Quiz /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/mypage-quiz", element: <MypageQuiz /> },
      //   chap04
      { path: "/form-input", element: <FormInput /> },
      { path: "/form-input-quiz", element: <FormInputQuiz /> },
      { path: "/form-input2", element: <FormInput2 /> },
      { path: "/form-input2-quiz", element: <FormInput2Quiz /> },
      { path: "/form-input3", element: <FormInput3 /> },
      { path: "/form-input3-quiz", element: <FormInput3Quiz /> },
      // chap05
      { path: "/posts-nopage", element: <Post /> },
      { path: "/albums-nopage-quiz", element: <AlbumQuiz /> },
      { path: "/posts", element: <PostList /> },
      { path: "/albums-quiz", element: <AlbumListQuiz /> },
      { path: "/add-posts", element: <AddPostList /> },
      { path: "/add-albums-quiz", element: <AddAlbumQuiz /> },
      { path: "/posts-detail/:id", element: <PostDetail /> },
      { path: "/albums-detail-quiz/:id", element: <AlbumDetailQuiz /> },
      { path: "/login", element: <LoginView /> },
      { path: "/signin-quiz", element: <SignViewQuiz /> },
    ],
  },
]);

export default router;
