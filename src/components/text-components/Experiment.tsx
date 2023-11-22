import Question from "../Question"


const Experiment = () => {
  return (
    <div className='text-white'>
        
        <div className='text-[2rem] font-bold ml-6'>Experiment</div>

        <hr className="left-0 mt-2 mb-8 w-[100%] self-center"/>
        
        <div className='mx-2 flex flex-col gap-3'>
  
          <div className="text-[1.5rem] font-bold">
            Surveys and their purpose:
          </div>

          <div className="text-lg">
          Two surveys were designed to collect data on two different areas of interest: the relationship between early childhood experiences and future life satisfaction, and the correlation between primary school success and high school grades.

          </div>

          <div className="text-lg ml-6 mt-3">
            &#8226; <span className="font-bold">Correlation Between Primary School Success and High School Grades:</span> the aim is to understand how an individual's success in primary school may influence their performance in high school. By examining experiences during the transition and the perceived impact of primary school success on high school grades, the survey seeks to uncover patterns and trends that may exist in academic trajectories.
          </div>

          <div className="text-lg ml-6">
            &#8226; <span className="font-bold">Early Childhood Experiences and Satisfaction with Future Life:</span> the aim is to investigate the connection between an individual's happiness with their present circumstances and hopes for the future and their early childhood experiences. The objective is to identify potential relationships between early life and overall life satisfaction by exploring the perceived impact of childhood events, parental influence, and the development of coping strategies.
          </div>

          <hr className="left-0 mt-10 w-[75%] self-center mb-10"/>

          <div className="text-[1.5rem] font-bold">
            Results and Their Significance:
          </div>

          <div className="text-lg ml-6 mt-3">
            &#8226; <span className="font-bold">Correlation Between Primary School Success and High School Grades:</span> the results would provide light on whether performance in elementary school and later high school grades are significantly correlated. Educational methods and support systems may be improved by having a better understanding of the elements that make a transition easy or difficult as well as how they are thought to affect academic success.

          </div>

          <div className="text-lg ml-6">
            &#8226; <span className="font-bold">Early Childhood Experiences and Satisfaction with Future Life:</span> the aim of the results is to ascertain whether a person's level of life satisfaction and their early experiences are significantly correlated. Talks about children well-being and future life outcomes can benefit from insights about the role of parental influence, the formation of coping strategies, and the general impact of early experiences on life satisfaction.

          </div>

          <hr className="left-0 mt-10 w-[75%] self-center mb-10"/>

          <div className="font-bold">
            Survey on Correlation Between Primary School Success and High School Grades:
          </div>

          <Question name="Age:" num={1} />
          <Question name="Gender:" num={2} />
          <Question name="Current Grade Level:" num={3} />
          <Question name="Reflect on your experience in primary school." questions={['Were you generally successful in your primary school studies?', 'What factors do you believe contributed to your success in primary school?']} num={4} />
          <Question name="Describe your transition from primary school to high school." questions={['Was the transition smooth or challenging? Why?', 'Did your performance in primary school influence your initial experiences in high school? How?']} num={5} />
          <Question name="How would you rate your overall academic performance in high school?" questions={['Excellent', 'Good', 'Average', 'Below average', 'Poor']} num={6} />
          <Question name="Do you believe your success in primary school had an impact on your high school grades? (Yes/No)" num={7} questions={['If yes, in what ways do you think your primary school success influenced your performance in high school?']} />
          <Question name="Did you receive any support or interventions during your transition from primary school to high school? (e.g., mentoring, counseling, tutoring)?" num={8} />
          <Question name="Based on your experiences, what recommendations would you give to improve the transition from primary school to high school?" num={9} />


          <hr className="left-0 mt-10 w-[75%] self-center mb-10"/>

          <div className="font-bold">
            Survey on Early Childhood Experiences and Satisfaction with Future Life:
          </div>

          <Question name="Age:" num={1} />
          <Question name="Gender:" num={2} />
          <Question name="Current Life Satisfaction Level (on a scale of 1 to 10):" num={3} />
          <Question name="Reflect on your early childhood experiences." questions={['How would you describe your overall childhood experience? (Happy, Neutral, Challenging)', 'Are there specific events or experiences from your early childhood that stand out?']} num={4} />
          <Question name="How would you characterize the influence of your parents or caregivers during your early years?" questions={['Supportive', 'Strict', 'Neglectful', 'Other (please specify)']} num={5} />
          <Question name="Did your early childhood experiences have any impact on your attitude towards education?" questions={['Yes, positively', 'Yes, negatively', 'No impact']} num={6} />
          <Question name="On a scale of 1 to 10, how satisfied are you with your current life and future prospects?" num={7}  />
          <Question name="Do you believe there is a connection between your early childhood experiences and your current satisfaction with life? (Yes/No)" num={8} questions={['If yes, please elaborate on how these early experiences have influenced your outlook on life.']}/>
          <Question name="Did you develop any specific coping mechanisms or skills during your early years that you believe contribute to your current well-being?" num={9} />
          <Question name="What recommendations would you give to improve the well-being of children during their early years?" num={10} />

          </div>

  
  
      </div>
  )
}

export default Experiment