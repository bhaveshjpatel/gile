import React from 'react';
import Pane from '@/components/ui/Pane/Pane';
import Options from './AddOptions/AddOptions';

export default function Page() {
    return (
        <div>
            <Pane className="space-y-8">
                <div className="lg:w-[680px] space-y-6 lg:space-y-8">
                    <div className="lg:flex lg:justify-between lg:items-center">
                        <h1 className="text-2xl font-[300]">What options do you have?</h1>

                        {/* todo: add option examples */}
                        {/*<Examples/> */}
                    </div>

                    <h2 className="lg:text-xl font-[300] text-neutral-2 max-w-[360px]">
                        Add at least two options you can take to solve your problem.
                    </h2>

                    <Options/>
                </div>
            </Pane>
        </div>
    );
}
