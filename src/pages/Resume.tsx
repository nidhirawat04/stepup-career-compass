import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Download, Plus, Trash2 } from "lucide-react";
interface Education {
  school: string;
  degree: string;
  year: string;
}
interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}
const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState<Education[]>([{
    school: "",
    degree: "",
    year: ""
  }]);
  const [experience, setExperience] = useState<Experience[]>([{
    company: "",
    position: "",
    duration: "",
    description: ""
  }]);
  const [skills, setSkills] = useState("");
  const addEducation = () => {
    setEducation([...education, {
      school: "",
      degree: "",
      year: ""
    }]);
  };
  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };
  const addExperience = () => {
    setExperience([...experience, {
      company: "",
      position: "",
      duration: "",
      description: ""
    }]);
  };
  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };
  const handleDownload = () => {
    // This is a simplified version. In a real app, you'd use a library like jsPDF
    alert("Resume download functionality would be implemented here!");
  };
  return <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resume Builder    <span className="gradient-primary bg-clip-text text-transparent"></span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Create a professional resume in minutes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form Section */}
            <div className="space-y-6">
              <Card className="p-6 gradient-card">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 234 567 8900" />
                  </div>
                  <div>
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea id="summary" value={summary} onChange={e => setSummary(e.target.value)} placeholder="Brief description of your professional background..." rows={4} />
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Education</h2>
                  <Button size="sm" onClick={addEducation} variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => <div key={index} className="space-y-3 p-4 border border-border rounded-lg relative">
                      {education.length > 1 && <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={() => removeEducation(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>}
                      <Input placeholder="School/University" value={edu.school} onChange={e => {
                    const newEdu = [...education];
                    newEdu[index].school = e.target.value;
                    setEducation(newEdu);
                  }} />
                      <Input placeholder="Degree" value={edu.degree} onChange={e => {
                    const newEdu = [...education];
                    newEdu[index].degree = e.target.value;
                    setEducation(newEdu);
                  }} />
                      <Input placeholder="Year" value={edu.year} onChange={e => {
                    const newEdu = [...education];
                    newEdu[index].year = e.target.value;
                    setEducation(newEdu);
                  }} />
                    </div>)}
                </div>
              </Card>

              <Card className="p-6 gradient-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Experience</h2>
                  <Button size="sm" onClick={addExperience} variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => <div key={index} className="space-y-3 p-4 border border-border rounded-lg relative">
                      {experience.length > 1 && <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={() => removeExperience(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>}
                      <Input placeholder="Company" value={exp.company} onChange={e => {
                    const newExp = [...experience];
                    newExp[index].company = e.target.value;
                    setExperience(newExp);
                  }} />
                      <Input placeholder="Position" value={exp.position} onChange={e => {
                    const newExp = [...experience];
                    newExp[index].position = e.target.value;
                    setExperience(newExp);
                  }} />
                      <Input placeholder="Duration" value={exp.duration} onChange={e => {
                    const newExp = [...experience];
                    newExp[index].duration = e.target.value;
                    setExperience(newExp);
                  }} />
                      <Textarea placeholder="Description" value={exp.description} onChange={e => {
                    const newExp = [...experience];
                    newExp[index].description = e.target.value;
                    setExperience(newExp);
                  }} rows={3} />
                    </div>)}
                </div>
              </Card>

              <Card className="p-6 gradient-card">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <Textarea placeholder="List your skills (comma-separated)" value={skills} onChange={e => setSkills(e.target.value)} rows={4} />
              </Card>
            </div>

            {/* Preview Section */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="p-8 gradient-card shadow-medium">
                <h2 className="text-xl font-bold mb-6">Preview</h2>
                <div className="space-y-6 text-sm">
                  <div className="text-center border-b border-border pb-4">
                    <h3 className="text-2xl font-bold mb-2">{name || "Your Name"}</h3>
                    <p className="text-muted-foreground">{email || "email@example.com"}</p>
                    <p className="text-muted-foreground">{phone || "+1 234 567 8900"}</p>
                  </div>

                  {summary && <div>
                      <h4 className="font-bold mb-2">Professional Summary</h4>
                      <p className="text-muted-foreground">{summary}</p>
                    </div>}

                  <div>
                    <h4 className="font-bold mb-2">Education</h4>
                    {education.map((edu, index) => <div key={index} className="mb-3">
                        <p className="font-semibold">{edu.degree || "Degree"}</p>
                        <p className="text-muted-foreground">{edu.school || "School"}</p>
                        <p className="text-muted-foreground text-xs">{edu.year || "Year"}</p>
                      </div>)}
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Experience</h4>
                    {experience.map((exp, index) => <div key={index} className="mb-3">
                        <p className="font-semibold">{exp.position || "Position"}</p>
                        <p className="text-muted-foreground">{exp.company || "Company"}</p>
                        <p className="text-muted-foreground text-xs">{exp.duration || "Duration"}</p>
                        <p className="text-muted-foreground text-xs mt-1">{exp.description}</p>
                      </div>)}
                  </div>

                  {skills && <div>
                      <h4 className="font-bold mb-2">Skills</h4>
                      <p className="text-muted-foreground">{skills}</p>
                    </div>}
                </div>

                <Button onClick={handleDownload} className="w-full mt-6 gradient-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Resume;