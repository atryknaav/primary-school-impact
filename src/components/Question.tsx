type QuestionProps = {
    name: string,
    num: number,
    questions?: string[]
}

const Question = (props: QuestionProps) => {
    const {name, questions, num} = props;
  return (
    <div className="my-2 ml-8">
        <div className="font-bold text-md mb-3">
            {JSON.stringify(num) + '. ' + name}

        </div>

        <div className="ml-10 flex flex-col gap-2">
            {questions?.map((item, index) => (
                <div key={index}>&#8226; {item}</div>
            ))}
        </div>
        
    </div>
  )
}

export default Question