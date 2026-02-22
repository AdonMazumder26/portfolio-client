export default function SkeletonCard() {
    return (
        <div className="animate-pulse bg-gray-800 rounded-lg p-4 mb-6">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>
    );
}