import React, { useState } from 'react';
import { Calendar, CheckSquare, Square, Printer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ChecklistTask {
  id: string;
  text: string;
  subtext: string;
  category: 'logistics' | 'packing' | 'utilities' | 'moving-day';
}

const CHECKLIST_PHASES = [
  {
    id: '8-weeks',
    title: '8 Weeks Out: Strategy & Moving Budget',
    timeline: '2 Months Before Moving',
    tasks: [
      {
        id: 't-1',
        text: 'Request Instant Estimate & Home Survey from Poawk Property Movers',
        subtext: 'Get an early baseline quote and reserve your target moving weekend.',
        category: 'logistics'
      },
      {
        id: 't-2',
        text: 'Create a Digital Moving Folder & Floor Plan',
        subtext: 'Collect your lease agreements, floor layout, and landlord clearances.',
        category: 'logistics'
      },
      {
        id: 't-3',
        text: 'Begin Room-by-Room Decluttering',
        subtext: 'Sort items to sell, donate, or discard. Reducing volume lowers your moving cost.',
        category: 'packing'
      }
    ] as ChecklistTask[]
  },
  {
    id: '4-weeks',
    title: '4 Weeks Out: Booking & Packaging',
    timeline: '1 Month Before Moving',
    tasks: [
      {
        id: 't-4',
        text: 'Confirm Poawk Binding Quote & Moving Package',
        subtext: 'Lock in your enclosed truck and choose Full-Service or Essential packing.',
        category: 'logistics'
      },
      {
        id: 't-5',
        text: 'Receive Branded Heavy-Duty Boxes & Wardrobe Cartons',
        subtext: 'If self-packing, order Poawk double-walled boxes and bubble wrap early.',
        category: 'packing'
      },
      {
        id: 't-6',
        text: 'Notify School & Healthcare Providers',
        subtext: 'Transfer school records and obtain essential medical documentation.',
        category: 'utilities'
      }
    ] as ChecklistTask[]
  },
  {
    id: '2-weeks',
    title: '2 Weeks Out: Utilities & Estate Security',
    timeline: '14 Days Before Moving',
    tasks: [
      {
        id: 't-7',
        text: 'Coordinate Accra Estate Entry Clearances',
        subtext: 'Submit vehicle registration and Poawk crew clearance to estate managers (East Legon Hills, Cantonments, Trassaco).',
        category: 'logistics'
      },
      {
        id: 't-8',
        text: 'Transfer Fiber Internet & Utilities',
        subtext: 'Schedule disconnection for ECG power and water meters at old residence; arrange activation at new address.',
        category: 'utilities'
      },
      {
        id: 't-9',
        text: 'Designate High-Value & Personal Documents Bag',
        subtext: 'Keep passports, deeds, birth certificates, and jewelry in your personal vehicle.',
        category: 'packing'
      }
    ] as ChecklistTask[]
  },
  {
    id: 'moving-week',
    title: 'Moving Week & Moving Day Execution',
    timeline: 'Zero Downtime Relocation',
    tasks: [
      {
        id: 't-10',
        text: 'Defrost Refrigerators & Secure Electronics',
        subtext: 'Unplug and drain deep freezers at least 24 hours prior to transit.',
        category: 'packing'
      },
      {
        id: 't-11',
        text: 'Welcome Poawk Uniformed Crew & Conduct Initial Walkthrough',
        subtext: 'Review the itemized manifest with the lead supervisor before loading starts.',
        category: 'moving-day'
      },
      {
        id: 't-12',
        text: 'Final Room Walkthrough & Key Handover',
        subtext: 'Verify all closets, storage spaces, and outdoor balconies are completely clear.',
        category: 'moving-day'
      }
    ] as ChecklistTask[]
  }
];

export const EightWeekChecklist: React.FC = () => {
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({
    't-1': true,
    't-4': true
  });

  const toggleTask = (id: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalTasks = CHECKLIST_PHASES.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedCount = Object.values(checkedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  return (
    <section id="move-checklist" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-wider text-blue-600 mb-2 font-mono uppercase">
              INTERACTIVE PLANNING TOOL · POAWK PROPERTY MOVERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              The Official 8-Week Accra Relocation Checklist
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              The official 8-week moving checklist by Poawk Property Movers, adapted specifically for Accra residential estates, Ghana utility handovers, and nationwide transport.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 min-w-[260px] text-right">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">
              Checklist Progress
            </div>
            <div className="text-2xl font-black text-blue-600 font-mono mt-0.5">
              {progressPercent}% Complete
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-2xs text-slate-400 mt-1">
              {completedCount} of {totalTasks} milestones completed
            </div>
          </div>
        </div>

        {/* 4-Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHECKLIST_PHASES.map((phase) => (
            <div
              key={phase.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {phase.title}
                    </h3>
                    <div className="text-xs text-blue-600 font-medium mt-0.5">
                      {phase.timeline}
                    </div>
                  </div>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>

                <div className="space-y-3.5">
                  {phase.tasks.map((task) => {
                    const isDone = !!checkedTasks[task.id];
                    return (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isDone
                            ? 'bg-blue-50/60 border-blue-200 text-slate-900'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 text-blue-600">
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 fill-blue-600 text-white" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`text-xs sm:text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {task.text}
                          </div>
                          <div className="text-2xs text-slate-500 mt-1 leading-relaxed">
                            {task.subtext}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between text-2xs text-slate-500">
                <span>Phase completed tasks: {phase.tasks.filter(t => checkedTasks[t.id]).length}/{phase.tasks.length}</span>
                <span className="font-semibold text-blue-600">Poawk Certified Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Print or Export Action Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <strong>Need to print this checklist for your move?</strong> Use our printable manifest or share with your family members via WhatsApp.
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="px-4 py-2.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Print Moving Checklist</span>
          </button>
        </div>

      </div>
    </section>
  );
};
