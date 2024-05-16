import { View } from "@tarojs/components";
import { AtRadio, AtButton } from "taro-ui";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";
import Taro from "@tarojs/taro";

/*做题页面*/

export default () => {
  //当前的题目序号(从1开始)
  const [current, setCurrent] = useState<number>(1);
  //当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  //const question = questions[0];
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });
  // 当前回答
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList] = useState<string[]>([]);

  //序号变化时,更新当前题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  // @ts-ignore
  return (
    <View className="doQuestionPage">
      {JSON.stringify(answerList)}
      <View className="at-article__h1 title">
        {current}.{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            // 记录回答
            answerList[current - 1] = value;
          }}
        />
      </View>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {current < questions.length && (
        <AtButton
          circle
          className="contorBtn"
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}
        >
          下一题
        </AtButton>
      )}
      {current === questions.length && (
        <AtButton
          type="primary"
          circle
          className="contorBtn"
          disabled={!currentAnswer}
          onClick={() => {
            // 存储答案
            Taro.setStorageSync('answerList', answerList)
            Taro.navigateTo({
              url: '/pages/result/index',
            })
          }}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="contorBtn"
          onClick={() => setCurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
