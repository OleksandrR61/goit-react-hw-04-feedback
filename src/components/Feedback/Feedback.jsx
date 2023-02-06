import { useState } from "react";

import { Section, FeedbackOptions, Statistics } from "components";

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const GRADES = ["good", "neutral", "bad"];

    const handleLeaveFeedback = (event) => {
        switch (event.target.name) {
            case 'good': setGood(prevState => prevState + 1);
                break;
            case 'neutral': setNeutral(prevState => prevState + 1);
                break;
            case 'bad': setBad(prevState => prevState + 1);
                break;
            default: break;
        };

        event.target.blur();
    };

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = `${countTotalFeedback && Math.round(100*good/countTotalFeedback)}%`;

    return (
        <>
            <h1>Feedback Count</h1>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={GRADES}
                    onLeaveFeedback={handleLeaveFeedback}
                />
            </Section>

            <Section title="Statistics">
                <Statistics
                    option={{good, neutral, bad}}
                    total={countTotalFeedback}
                    positivePercentage={countPositiveFeedbackPercentage}
                />
            </Section>
        </>
    );
};