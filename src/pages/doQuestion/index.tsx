import { View } from "@tarojs/components";
import { AtRadio, AtButton } from "taro-ui";
import { useEffect, useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";

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
  //序号变化时,更新当前题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
  }, [current]);

  // @ts-ignore
  return (
    <View className="doQuestionPage">
      <View className="at-article__h1 title">
        {current}.{currentQuestion.title}
      </View>
      <view className="options-wrappper">
        <AtRadio options={questionOptions} />
      </view>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {current < questions.length && (
        <AtButton
          circle
          className="contorBtn"
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
          onClick={() => {
            /*todo 跳转到结果页面*/
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
