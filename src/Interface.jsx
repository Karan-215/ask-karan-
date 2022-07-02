import React from "react";
import Card from "./Card";
import Program from "./Program";
function AskMe() {
  return (
    <>
      <div class="bg-gray-800 space-y-8  flex flex-col items-center ">
        <div class="flex flex-col items-center">
          <h1 className="text-3xl font-bold m-3 text-yellow-600 shadow-lg ">
            Ask KARAN
          </h1>
          <Card>
            question poochne ke liye please ek question mark ka use karein hi
            akrein
          </Card>
        </div>

        <Program></Program>

        <Card
          title="How to use Ask KARAN"
          subtitle="The world's best virtual tarot"
        >
          Punk is a virtual tarot that that can answer all kinds of questions.
          Questions about the present, the past, and your future. He can be a
          bit tempermental, requiring that each question be presented with a
          petition of "Punk, please answer the following question" or "Punk,
          please answer" before each question is asked. Failure to correctly
          petition will not bring results.
        </Card>

        <Card title="The history of Ask KARAN">
          Punk was born in 2007. As he began to age, he realized he had an
          ability to read the fortunes of others, and quickly became a star in
          his small hometown. To expand his operaion, he knew he had to join the
          digital age. Through the use of modern technology, he is able to
          answer thousands of questions every day from people all over the
          world.<br></br>
          <span class="p-5 m-5">
            In early 2016, the demand for Punk's services became so high, he
            brougt on 10 additional team members from around the country to
            increase answer throughput. With a large team, and his mind in
            overdrive, he is now able to answer upwards of 13,240 questions per
            day (Average over the past 30 days), with pinpoint accuracy. Though
            the team members are new, they are just as tempermental. Requiring a
            correct petition each and every time.
          </span>
        </Card>

        <Card
          title="Has KARAN ever been seen?"
          imglink="https://askjud.com/images/v.jpg"
        >
          A dark and blury photograph of Punk was captured in early 2010. The
          developed image is shown below:
        </Card>

        <Card title="The Twitter migration of 2015">
          In early 2015, Punk moved part of his online presence to Twitter,
          under the handle @TheAskPunk. It wasn't before long before the crowds
          of people following his presence online made the jump to Twitter. His
          ability to answer many different types of questions, both online and
          on Twitter attracted many.<br></br>
          His Twitter has been inactive for two years due to an oversubscription
          of requests. Twitter hadn't created the tooling for him to keep up
          with demand. Though there may come a time for him to return, there are
          no plans at this time.
        </Card>
      </div>
    </>
  );
}

export default AskMe;
