import { Loader2 } from "lucide-react";

const AppLoader = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                    Loading, please wait…
                </p>
            </div>
        </div>
    );
};

export default AppLoader;
