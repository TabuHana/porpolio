import { Separator } from "./ui/separator"

export const Experience = () => {
  return (
    <div className="my-10 flex gap-4 h-[200px]">
      <div className="w-[150px] py-16">
        <div className="text-muted-foreground text-xs pb-6">Education</div>
        <div className="space-y-6">
          <div className="text-muted-foreground text-xs">
            <div className="text-base font-semibold">Bachelors Of Arts</div>
            <div>2009 - 20013</div>
            <div>Cambridge University</div>
          </div>
          <div className="text-muted-foreground text-xs">
            <div className="text-base font-semibold">Bachelors Of Arts</div>
            <div>2009 - 20013</div>
            <div>Cambridge University</div>
          </div>
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 py-16">
        <div className="text-muted-foreground text-xs pb-6">Experience</div>
        <div className="space-y-6">
          <div className="text-muted-foreground text-xs">
            <div className="text-base font-semibold">Bachelors Of Arts</div>
            <div>2009 - 20013</div>
            <div>Cambridge University</div>
          </div>
          <div className="text-muted-foreground text-xs">
            <div className="text-base font-semibold">Bachelors Of Arts</div>
            <div>2009 - 20013</div>
            <div>Cambridge University</div>
          </div>
        </div>
      </div>
    </div>
  )
}