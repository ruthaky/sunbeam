import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function ServiceCard() {
    return (
        <div className="flex flex-row gap-4 bg-white">
            {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                    <Button>Learn More</Button>
                </Card>
            ))}
        </div>
    );
}
