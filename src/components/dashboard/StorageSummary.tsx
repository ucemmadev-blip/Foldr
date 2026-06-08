import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card";

import {  Files } from "lucide-react";

export const StorageSummary = () => {
  return (
    <>
    
    <h1 className="text-3xl font-bold ml-10">My Storage</h1>

        <div className="flex justify-between mt-5 mx-10">
          <Card className="w-40">
            <CardHeader>
              <CardTitle>
                <Files />
              </CardTitle>
              <CardDescription>Total 1.5GB</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Documents</p>
            </CardContent>
          </Card>

          <Card className="w-40">
            <CardHeader>
              <CardTitle>
                <Files />
              </CardTitle>
              <CardDescription>Total 1.5GB</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Photos</p>
            </CardContent>
          </Card>

          <Card className="w-40">
            <CardHeader>
              <CardTitle>
                <Files />
              </CardTitle>
              <CardDescription>Total 1.5GB</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Audio</p>
            </CardContent>
          </Card>

          <Card className="w-40">
            <CardHeader>
              <CardTitle>
                <Files />
              </CardTitle>
              <CardDescription>Total 1.5GB</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Videos</p>
            </CardContent>
          </Card>
        </div>
    </>
  )
}