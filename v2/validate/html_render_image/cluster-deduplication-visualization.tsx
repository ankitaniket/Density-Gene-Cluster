import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Initial Overlapping Clusters",
      description:
        "Initially, samples can appear in multiple clusters, creating overlap.",
    },
    {
      title: "Calculate Similarities",
      description:
        "For each sample in each cluster, calculate its average similarity to other samples in that cluster.",
    },
    {
      title: "Assign to Best Cluster",
      description:
        "Each sample is assigned to the cluster where it has the highest similarity score.",
    },
    {
      title: "Create Deduplicated Clusters",
      description:
        "Rebuild clusters with each sample appearing in exactly one cluster.",
    },
    {
      title: "Clean Up & Sort",
      description:
        "Remove any empty clusters and sort by cluster size (largest first).",
    },
  ];

  const nextStep = () => {
    setStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  // Sample data representation
  const renderVisualization = () => {
    switch (step) {
      case 0:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-96">
              {/* Cluster 1 */}
              <circle
                cx="300"
                cy="200"
                r="140"
                fill="#f8e1e1"
                stroke="#e53e3e"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="300"
                y="80"
                textAnchor="middle"
                fill="#e53e3e"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 1
              </text>

              {/* Cluster 2 */}
              <circle
                cx="500"
                cy="200"
                r="140"
                fill="#e1f1f8"
                stroke="#3182ce"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="500"
                y="80"
                textAnchor="middle"
                fill="#3182ce"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 2
              </text>

              {/* Samples in Cluster 1 */}
              <circle cx="240" cy="160" r="20" fill="#e53e3e" />
              <text
                x="240"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                0
              </text>

              <circle cx="300" cy="220" r="20" fill="#e53e3e" />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                1
              </text>

              <circle cx="340" cy="140" r="20" fill="#e53e3e" />
              <text
                x="340"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                2
              </text>

              {/* Samples in Cluster 2 */}
              <circle cx="460" cy="160" r="20" fill="#3182ce" />
              <text
                x="460"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                3
              </text>

              <circle cx="540" cy="220" r="20" fill="#3182ce" />
              <text
                x="540"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                4
              </text>

              {/* Overlapping sample */}
              <circle cx="400" cy="200" r="20" fill="#805ad5" />
              <text
                x="400"
                y="200"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                5
              </text>

              {/* Legend */}
              <circle cx="100" cy="340" r="15" fill="#805ad5" />
              <text
                x="125"
                cy="345"
                textAnchor="start"
                fill="#1a202c"
                fontSize="18"
              >
                Overlapping sample
              </text>
            </svg>
          </div>
        );
      case 1:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-96">
              {/* Cluster 1 */}
              <circle
                cx="300"
                cy="200"
                r="140"
                fill="#f8e1e1"
                stroke="#e53e3e"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="300"
                y="80"
                textAnchor="middle"
                fill="#e53e3e"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 1
              </text>

              {/* Cluster 2 */}
              <circle
                cx="500"
                cy="200"
                r="140"
                fill="#e1f1f8"
                stroke="#3182ce"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="500"
                y="80"
                textAnchor="middle"
                fill="#3182ce"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 2
              </text>

              {/* Samples in Cluster 1 */}
              <circle cx="240" cy="160" r="20" fill="#e53e3e" />
              <text
                x="240"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                0
              </text>

              <circle cx="300" cy="220" r="20" fill="#e53e3e" />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                1
              </text>

              <circle cx="340" cy="140" r="20" fill="#e53e3e" />
              <text
                x="340"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                2
              </text>

              {/* Samples in Cluster 2 */}
              <circle cx="460" cy="160" r="20" fill="#3182ce" />
              <text
                x="460"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                3
              </text>

              <circle cx="540" cy="220" r="20" fill="#3182ce" />
              <text
                x="540"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                4
              </text>

              {/* Overlapping sample */}
              <circle cx="400" cy="200" r="20" fill="#805ad5" />
              <text
                x="400"
                y="205"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                5
              </text>

              {/* Similarity calculations */}
              <line
                x1="390"
                y1="203"
                x2="240"
                y2="160"
                stroke="#e53e3e"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <line
                x1="390"
                y1="200"
                x2="300"
                y2="220"
                stroke="#e53e3e"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <line
                x1="390"
                y1="200"
                x2="340"
                y2="140"
                stroke="#e53e3e"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              <line
                x1="410"
                y1="200"
                x2="460"
                y2="160"
                stroke="#3182ce"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <line
                x1="420"
                y1="200"
                x2="540"
                y2="220"
                stroke="#3182ce"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              <text
                x="300"
                y="300"
                textAnchor="middle"
                fill="#e53e3e"
                fontSize="18"
                fontWeight="bold"
              >
                Similarity: 0.65
              </text>
              <text
                x="500"
                y="300"
                textAnchor="middle"
                fill="#3182ce"
                fontSize="18"
                fontWeight="bold"
              >
                Similarity: 0.72
              </text>
            </svg>
          </div>
        );
      case 2:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-96">
              {/* Cluster 1 */}
              <circle
                cx="300"
                cy="200"
                r="140"
                fill="#f8e1e1"
                stroke="#e53e3e"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="300"
                y="80"
                textAnchor="middle"
                fill="#e53e3e"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 1
              </text>

              {/* Cluster 2 */}
              <circle
                cx="500"
                cy="200"
                r="140"
                fill="#e1f1f8"
                stroke="#3182ce"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <text
                x="500"
                y="80"
                textAnchor="middle"
                fill="#3182ce"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 2
              </text>

              {/* Samples in Cluster 1 */}
              <circle cx="240" cy="160" r="20" fill="#e53e3e" />
              <text
                x="240"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                0
              </text>

              <circle cx="300" cy="220" r="20" fill="#e53e3e" />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                1
              </text>

              <circle cx="340" cy="140" r="20" fill="#e53e3e" />
              <text
                x="340"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                2
              </text>

              {/* Samples in Cluster 2 */}
              <circle cx="460" cy="160" r="20" fill="#3182ce" />
              <text
                x="460"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                3
              </text>

              <circle cx="540" cy="220" r="20" fill="#3182ce" />
              <text
                x="540"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                4
              </text>

              {/* Overlapping sample - now assigned */}
              <circle cx="400" cy="200" r="20" fill="#3182ce" />
              <text
                x="400"
                y="200"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                5
              </text>

              {/* Assignment arrow */}
              <path
                d="M 400 260 C 400 280, 440 280, 440 260"
                fill="none"
                stroke="#000"
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="13"
                  markerHeight="7"
                  refX="1"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
              </defs>
              <text
                x="420"
                y="300"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
              >
                Best match
              </text>
            </svg>
          </div>
        );
      case 3:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-96">
              {/* Cluster 1 - Original shape */}
              <circle
                cx="300"
                cy="200"
                r="140"
                fill="none"
                stroke="#e53e3e"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />

              {/* Cluster 1 - New shape */}
              <path
                d="M 240 160 Q 280 120, 340 140 Q 380 180, 300 220 Q 260 240, 240 160"
                fill="#f8e1e1"
                stroke="#e53e3e"
                strokeWidth="3"
              />
              <text
                x="300"
                y="80"
                textAnchor="middle"
                fill="#e53e3e"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 1
              </text>

              {/* Cluster 2 - Original shape */}
              <circle
                cx="500"
                cy="200"
                r="140"
                fill="none"
                stroke="#3182ce"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />

              {/* Cluster 2 - New shape */}
              <path
                d="M 460 160 Q 500 120, 540 140 Q 580 180, 540 220 Q 480 260, 400 200 Q 420 160, 460 160"
                fill="#e1f1f8"
                stroke="#3182ce"
                strokeWidth="3"
              />
              <text
                x="500"
                y="80"
                textAnchor="middle"
                fill="#3182ce"
                fontSize="24"
                fontWeight="bold"
              >
                Cluster 2
              </text>

              {/* Samples in Cluster 1 */}
              <circle cx="240" cy="160" r="20" fill="#e53e3e" />
              <text
                x="240"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                0
              </text>

              <circle cx="300" cy="220" r="20" fill="#e53e3e" />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                1
              </text>

              <circle cx="340" cy="140" r="20" fill="#e53e3e" />
              <text
                x="340"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                2
              </text>

              {/* Samples in Cluster 2 */}
              <circle cx="460" cy="160" r="20" fill="#3182ce" />
              <text
                x="460"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                3
              </text>

              <circle cx="540" cy="220" r="20" fill="#3182ce" />
              <text
                x="540"
                y="220"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                4
              </text>

              {/* Sample now in Cluster 2 only */}
              <circle cx="400" cy="200" r="20" fill="#3182ce" />
              <text
                x="400"
                y="200"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                5
              </text>
            </svg>
          </div>
        );
      case 4:
        return (
          <div className="p-4 bg-gray-100 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-96">
              {/* Final clusters */}
              <g transform="translate(0, -40)">
                {/* Cluster 2 - Now first since it's larger */}
                <path
                  d="M 460 160 Q 500 120, 540 140 Q 580 180, 540 220 Q 480 260, 400 200 Q 420 160, 460 160"
                  fill="#e1f1f8"
                  stroke="#3182ce"
                  strokeWidth="3"
                />
                <text
                  x="470"
                  y="80"
                  textAnchor="middle"
                  fill="#3182ce"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Cluster 1 (3 samples)
                </text>

                {/* Cluster 1 - Now second */}
                <path
                  d="M 240 160 Q 280 120, 340 140 Q 380 180, 300 220 Q 260 240, 240 160"
                  fill="#f8e1e1"
                  stroke="#e53e3e"
                  strokeWidth="3"
                />
                <text
                  x="300"
                  y="80"
                  textAnchor="middle"
                  fill="#e53e3e"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Cluster 2 (3 samples)
                </text>

                {/* Samples in original Cluster 1, now Cluster 2 */}
                <circle cx="240" cy="160" r="20" fill="#e53e3e" />
                <text
                  x="240"
                  y="160"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  0
                </text>

                <circle cx="300" cy="220" r="20" fill="#e53e3e" />
                <text
                  x="300"
                  y="220"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  1
                </text>

                <circle cx="340" cy="140" r="20" fill="#e53e3e" />
                <text
                  x="340"
                  y="140"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  2
                </text>

                {/* Samples in original Cluster 2, now Cluster 1 */}
                <circle cx="460" cy="160" r="20" fill="#3182ce" />
                <text
                  x="460"
                  y="160"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  3
                </text>

                <circle cx="540" cy="220" r="20" fill="#3182ce" />
                <text
                  x="540"
                  y="220"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  4
                </text>

                <circle cx="400" cy="200" r="20" fill="#3182ce" />
                <text
                  x="400"
                  y="200"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  5
                </text>
              </g>

              {/* Legend showing rearrangement */}
              <text
                x="400"
                y="360"
                textAnchor="middle"
                fill="#1a202c"
                fontSize="18"
                fontWeight="bold"
              >
                Clusters sorted by size (tied in this example)
              </text>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-6 w-full p-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Cluster Deduplication Process
      </h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h3 className="text-2xl font-semibold">{steps[step].title}</h3>
        </div>

        <div className="p-4">
          <p className="text-gray-700 mb-4 text-xl">
            {steps[step].description}
          </p>
          {renderVisualization()}
        </div>

        <div className="flex justify-between bg-gray-100 p-4">
          <button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center"
          >
            Previous
          </button>
          <div className="text-gray-600 text-lg">
            Step {step + 1} of {steps.length}
          </div>
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-md flex items-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
