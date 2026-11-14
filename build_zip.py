import os
import shutil
import zipfile


def build_zip():
    base_dir = "/home/erolox/web/final_project"
    zip_path = "/home/erolox/web/final_submission.zip"

    include_files = [
        "index.html",
        "destinations.html",
        "planner.html",
        "guides.html",
        "contact.html",
        "README.md",
    ]
    include_dirs = ["css", "js", "data", "assets", "screenshots"]

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for fname in include_files:
            fpath = os.path.join(base_dir, fname)
            if os.path.exists(fpath):
                zf.write(fpath, arcname=fname)

        for dname in include_dirs:
            dpath = os.path.join(base_dir, dname)
            if os.path.exists(dpath):
                for root, _, files in os.walk(dpath):
                    for fn in files:
                        fp = os.path.join(root, fn)
                        rel = os.path.relpath(fp, base_dir)
                        zf.write(fp, arcname=rel)

    print(f"Created {zip_path} ({os.path.getsize(zip_path) / (1024 * 1024):.2f} MB)")


if __name__ == "__main__":
    build_zip()
