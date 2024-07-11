import { getLesson, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quiz } from "../quiz"

type LessonIdPageProps = {
    params: {
      lessonId: number;
    };
  };
const LessonIdPage=async(
    { params }: LessonIdPageProps
)=>{
    const lessonData=getLesson(
        params.lessonId
    )
    const userProgressData=getUserProgress()
    const [lesson,
        userProgress
    ]=await Promise.all([
        lessonData,
        userProgressData
    ])

    if(!lesson || !userProgress){
        return redirect("/learn")
    }
    const initialPercentage=lesson.challenges.filter((challenge)=>challenge.completed).length/lesson.challenges.length *100
    return(
        <div>
            <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            initialPercentage={initialPercentage}
            userSubscription={null}
            />
        </div>
    )
}
export default LessonIdPage

