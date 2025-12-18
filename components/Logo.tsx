import { Layers } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <Layers size={20} />
            </div>
            <span className="font-headings font-bold text-2xl tracking-tight text-slate-900">
                Rao<span className="text-primary-600">Filmwala</span>
            </span>
        </div>
    );
};

export default Logo;
