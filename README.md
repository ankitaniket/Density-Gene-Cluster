# Patient Clustering Algorithm

A Python implementation of a density-based clustering algorithm for patient similarity analysis.

## Project Structure

clustering-algo-code/
├── merge_cluster/
│ └── gene_clustering_robust.py # Main implementation
├── Clustering_algo_without_merging.ipynb
├── cluster_algo_with_merge.ipynb # Jupyter notebook with merge functionality
└── merge_details.md # Documentation of merge process

## Features

- Similarity matrix computation
- Density-based cluster formation
- Cluster refinement
- Cluster merging based on neighbor similarity
- Support for gene selection in genomic data

## Requirements

- Python 3.9+
- NumPy
- Jupyter Notebook/Lab (for running .ipynb files)

## Implementation Details

### Key Functions

- `select_genes()`: Selects most variant genes
- `compute_similarity_matrix()`: Calculates patient similarity
- `form_initial_clusters()`: Creates initial patient clusters
- `refine_clusters()`: Optimizes cluster assignments
- `merge_clusters()`: Combines similar clusters

## Setup and Installation

1. Create and activate virtual environment: (Optional - Recommended)

```bash
cd Density-Gene-Cluster
python3 -m venv .venv # For Unix-like systems
source .venv/bin/activate
```

### Using Python Script

```python
from merge_cluster.gene_clustering_robust import cluster_patients

# Basic usage with default parameters
clusters = cluster_patients(r=0.8, refine=True, max_iterations=10)

# Advanced usage with custom parameters
clusters = cluster_patients(
    r=0.75,              # Similarity threshold
    refine=True,         # Enable refinement
    max_iterations=15    # Maximum refinement iterations
)
```

## Parameters

- r (float): Similarity threshold (0.0 to 1.0)

  - Higher values create tighter clusters
  - Default: 0.8

- refine (bool): Enable cluster refinement

  - Improves cluster quality through iterations
  - Default: True

- max_iterations (int): Maximum refinement steps

  - Controls computational time
  - Default: 10

## Output

The algorithm outputs:

1. Similarity matrix
2. Neighbor and density calculations
3. Initial cluster formation steps
4. Refinement process (if enabled)
5. Final cluster assignments with patient IDs
