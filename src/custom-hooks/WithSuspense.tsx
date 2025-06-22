
import { Suspense, type ComponentType } from "react";

export function withSuspense<T extends object>(
    Component: React.LazyExoticComponent<ComponentType<T>>,
    fallback: React.ReactElement<any> = <div>...Loading</div>

): React.FC<T> {
    return function wrappedWithSuspense(props: T) {
        return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
        )
    }
}