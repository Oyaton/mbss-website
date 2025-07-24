import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Calendar, DollarSign, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Admissions",
  description: "Apply to join Monsignor Bala Secondary School - Admissions information and requirements"
}

export default function AdmissionsPage() {
  return (
    <main className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Admissions</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our community of learners! We welcome students who are eager to learn, 
          grow, and contribute to our school community.
        </p>
      </div>

      {/* Admissions Image */}
      <div className="relative h-96 w-full mb-12 rounded-lg overflow-hidden">
        <Image
          src="/gallery/20250712_151926.jpg"
          alt="School admissions"
          fill
          className="object-cover"
        />
      </div>

      {/* Admission Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Admission Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-lg">1. Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Submit completed application form with required documents</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-lg">2. Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Academic records and documents are reviewed by admissions committee</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-lg">3. Interview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Student and parent interview with school administration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <DollarSign className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-lg">4. Enrollment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pay fees and complete enrollment process</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements & Application Form */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Admission Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">For Senior 1 (S1):</h4>
              <ul className="space-y-1 text-sm">
                <li>• Primary Leaving Examination (PLE) certificate</li>
                <li>• Birth certificate or statutory declaration of age</li>
                <li>• Passport-size photographs (4 copies)</li>
                <li>• Medical report from recognized health facility</li>
                <li>• Transfer letter from previous school</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">For Senior 5 (S5):</h4>
              <ul className="space-y-1 text-sm">
                <li>• Uganda Certificate of Education (UCE) results</li>
                <li>• Academic transcripts from previous school</li>
                <li>• Character reference letter</li>
                <li>• All documents required for S1 admission</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Application Deadlines:</h4>
              <ul className="space-y-1 text-sm">
                <li>• First Term: December 15th</li>
                <li>• Second Term: April 15th</li>
                <li>• Third Term: August 15th</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Student's Full Name" required />
                <Input placeholder="Date of Birth" type="date" required />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Parent/Guardian Name" required />
                <Input placeholder="Phone Number" type="tel" required />
              </div>
              
              <Input placeholder="Email Address" type="email" required />
              
              <div className="grid md:grid-cols-2 gap-4">
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select Class</option>
                  <option value="s1">Senior 1 (S1)</option>
                  <option value="s2">Senior 2 (S2)</option>
                  <option value="s3">Senior 3 (S3)</option>
                  <option value="s4">Senior 4 (S4)</option>
                  <option value="s5">Senior 5 (S5)</option>
                  <option value="s6">Senior 6 (S6)</option>
                </select>
                
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select Term</option>
                  <option value="term1">First Term 2025</option>
                  <option value="term2">Second Term 2025</option>
                  <option value="term3">Third Term 2025</option>
                </select>
              </div>
              
              <Textarea placeholder="Additional Information or Questions" rows={3} />
              
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This is a preliminary application. You will need to visit 
                the school with original documents to complete the admission process.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact for Admissions */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help with Your Application?</h2>
        <p className="text-muted-foreground mb-6">
          Our admissions team is here to help you through the process.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Admissions</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
