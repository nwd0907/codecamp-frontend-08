export default function TypescriptPage(){
   interface IProfile {
       name: string
       age: number
       school: string
       hobby?: string
   }

   // 1. Pick 타입
   type IProfile2 = Pick<IProfile, "name" | "age">

   // 2. Omit 타입
   type IProfile3 = Omit<IProfile, "school">

   // 3. Partial 타입
   type IProfile4 = Partial<IProfile>

   // 4. Required 타입
   type IProfile5 = Required<IProfile>

   // 5. Record 타입
   type ZZZ = "aaa" | "qqq" | "rrr" // Union 타입
   let apple: ZZZ
   apple = "qqq"
   type IProfile6 = Record<ZZZ, IProfile>

   // ========== (type vs interface) 선언병합의 차이 =========== 
   interface IProfile {
       candy: number
   }

   let profile: Partial<IProfile> = {}
   profile.age = 10
   profile.candy = 10

    return (
        <div>타입스크립트 연습하기</div>
    )
}